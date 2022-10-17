import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../helpers/useForm";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { useHeroes } from "../hooks/useHeroes";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getHeroByName } = useHeroes();
  const { q = "" } = queryString.parse(location.search);

  const heroes = useMemo(() => getHeroByName(q), [q]);

  const { onInputChange, searchText } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
    console.log(q);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="search hero.."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary  w-100 mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary"
            style={{ display: q === "" ? "" : "none" }}
          >
            Search a hero
          </div>
          {!heroes.length && q !== "" && (
            <div className="alert alert-danger">
              No hero with <b>{q}</b>
            </div>
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
