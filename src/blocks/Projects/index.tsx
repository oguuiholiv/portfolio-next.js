import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css"; // Importe o CSS do Swiper
import * as S from "./styles";

const Projects: React.FC = () => {
  const username = "ooguuiholiv";
  const accessToken = "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";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((repos) => {
        const filteredRepos = repos.filter(
          (repo) => repo.name !== "ooguuiholiv"
        );
        // Mapeia os repositórios para buscar as informações adicionais (descrição e imagem)
        const projectPromises = filteredRepos.map((repo) => {
          return Promise.all([
            fetch(
              `https://api.github.com/repos/${username}/${repo.name}/contents/presentation/descricao.txt`
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
              `https://api.github.com/repos/${username}/${repo.name}/contents/presentation/imagem.jpg`
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
          ]).then(([description, imageUrl]) => ({
            name: repo.name,
            description,
            imageUrl,
            html_url: repo.html_url,
            site_url: repo.homepage
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
            });
          }, 0);
        });
      })
      .catch((error) =>
        console.error("Erro ao buscar dados do GitHub:", error)
      );
  }, []); // Executa o efeito apenas uma vez ao montar o componente

  return (
    <S.ProjectsContainer>
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
