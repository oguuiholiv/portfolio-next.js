import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Importe o CSS do Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as S from "./styles";

const Projects: React.FC = () => {
  const username = "ooguuiholiv";
  const accessToken = "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";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((repos) => {
        const filteredRepos = repos.filter(
          (repo) =>
            repo.name !== "ooguuiholiv" && repo.name !== "portfolio-next.js"
        );
        // Mapeia os repositórios para buscar as informações adicionais (descrição e imagem)
        const projectPromises = filteredRepos.map((repo) => {
          return Promise.all([
            fetch(
              `https://api.github.com/repos/${username}/${repo.name}/contents/presentation/descricao.txt`,
              {
                headers: {
                  Authorization: `${accessToken}`,
                },
              }
            )
              .then((response) => response.json())
              .then((content) => {
                const byteArray = new Uint8Array(
                  atob(content.content)
                    .split("")
                    .map((char) => char.charCodeAt(0))
                );

                // Decodifica o array de bytes para UTF-8
                const decoder = new TextDecoder("utf-8");
                return decoder.decode(byteArray);
              })
              .catch((error) => {
                console.error(
                  `Erro ao buscar descrição para o repositório ${repo.name}:`,
                  error
                );
                return "Descrição não encontrada"; // Ou qualquer outro valor padrão
              }),
            fetch(
              `https://api.github.com/repos/${username}/${repo.name}/contents/presentation/imagem.jpg`,
              {
                headers: {
                  Authorization: `${accessToken}`,
                },
              }
            )
              .then((response) => response.json())
              .then(
                (imageContent) =>
                  `data:image/jpeg;base64,${imageContent.content}`
              )
              .catch((error) => {
                console.error(
                  `Erro ao buscar imagem para o repositório ${repo.name}:`,
                  error
                );
                return ""; // Ou uma URL de imagem padrão
              }),
              fetch(
                `https://api.github.com/repos/${username}/${repo.name}/contents/presentation/stacks.txt`,
                {
                  headers: {
                    Authorization: `${accessToken}`, // Certifique-se de usar "Bearer" antes do token se necessário
                  },
                }
              )
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(`Erro ao buscar o arquivo stack: ${response.statusText}`);
                  }
                  return response.json();
                })
                .then((content) => {
                  const decodedContent = atob(content.content); // Decodifica o conteúdo em base64
                  const stackText = decodedContent.trim(); // Remove espaços em branco no início e no final
              
                  // Divide as linguagens com base no caractere #
                  const stackLanguages = stackText
                    .split("#")
                    .filter((lang) => lang.trim()) // Remove strings vazias
                    .map((lang) => lang.trim()); // Remove espaços em branco adicionais
              
                  return stackLanguages; // Retorna o array de linguagens
                })
                .catch((error) => {
                  console.error(
                    `Erro ao buscar stack para o repositório ${repo.name}:`,
                    error
                  );
                  return []; // Retorna um array vazio se ocorrer algum erro
                })
          ]).then(([description, imageUrl, stackLanguages]) => ({
            name: repo.name,
            description,
            imageUrl,
            stackLanguages,
            html_url: repo.html_url,
            site_url: repo.homepage,
          }));
        });

        // Espera todas as promessas serem resolvidas e atualiza o estado com os projetos
        Promise.all(projectPromises).then((projectsData) => {
          setProjects(projectsData);

          // Inicializa o Swiper após os projetos serem carregados e o componente renderizado
          setTimeout(() => {
            // Pequeno atraso para garantir que o DOM esteja atualizado
            new Swiper(".swiper", {
              // ... suas configurações do Swiper
              modules: [Navigation, Pagination],
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              pagination: {
                el: ".swiper-pagination",
              },
            });
          });
        });
      })
      .catch((error) =>
        console.error("Erro ao buscar dados do GitHub:", error)
      );
  }, []); // Executa o efeito apenas uma vez ao montar o componente

  return (
    <S.ProjectsContainer id="ProjectsContainer">
      <div className="title">
        <h1>
          Conheça meus <span className="colored">trabalhos</span>
        </h1>
      </div>

      <div className="carrousel">
        <div className="swiper">
          <div className="swiper-wrapper">
            {projects.map((project) => (
              <div key={project.name} className="swiper-slide">
                <div className="slide-content">
                  <div className="slide-image">
                    <img src={project.imageUrl} alt={project.name} />
                  </div>
                  <div className="slide-text">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="stacks">
                      {project.stackLanguages.map((language, index) => (
                        <span key={index} className="badge">
                          {language}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-button"
                    >
                      Ver Repositório
                    </a>
                    <a
                      href={project.site_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-button"
                    >
                      Visitar Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </S.ProjectsContainer>
  );
};

export default Projects;
