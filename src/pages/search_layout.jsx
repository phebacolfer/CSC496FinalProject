import { useState } from 'react'
import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { search_button, search_container, grid_container, grid_item } from './search_layout.module.css'
import { getImage } from 'gatsby-plugin-image'

const SearchLayout = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              desc
              title
              slug
              num
              cost
              supplies
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
                id
              }
            }
          }
        }
      }
    `);
  
    const handleSearch = () => {
      // Filter the nodes to only include those with a matching title
      const filteredNodes = data.allMdx.nodes.filter((node) =>
        node.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
      );
  
      setSearchResult(filteredNodes);
    };
  
    const handleChange = (event) => {
      // Update the search value in the state as it changes
      setSearchValue(event.target.value);
    };
  
    return (
      <div>
        <div className={search_container}>
          <input
            type="text"
            id="search-input"
            placeholder="Search by keyword..."
            onChange={handleChange} // Add an onChange event handler to handle input changes
          />
          <button
            className={search_button}
            id="searchButton"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <div className={grid_container}>
            {searchResult.map((node) => (
              <div
                key={node.frontmatter.slug}
                className={grid_item}
                style={{
                  backgroundImage: `url(${getImage(
                    node.frontmatter.hero_image
                  ).images.fallback.src})`,
                }}
              >
                <Link to={`../ideas/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchLayout;