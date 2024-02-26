"use client"
import React, { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import Header from "../../containers/Header";
import ProjectCard from "../../containers/ProjectCards";
import { projects } from "../../portfolio";

const Projetos = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const categories = useMemo(() => Array.from(new Set(projects.map((project) => project.category))), []);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const categoryRefs = useRef({});

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(term.toLowerCase()) || project.description.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = searchResults;
    } else if (selectedCategory) {
      filtered = filtered.filter((project) => project.category === selectedCategory);
    }

    return filtered;
  }, [selectedCategory, searchTerm, searchResults]);

  const scrollToCategory = (category) => {
    categoryRefs.current[category]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto mt-4 px-4"
      variants={fadeInAnimation}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <div className="flex justify-center space-x-4 mb-4">
        <motion.button
          aria-label="Todos os projetos"
          className={`bg-blue-600 text-white px-4 py-2 rounded-md transition-opacity duration-300 ${
            selectedCategory === "" ? "opacity-100" : "opacity-50 hover:opacity-75"
          }`}
          onClick={() => {
            setSelectedCategory("");
            setSearchTerm("");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Todos
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            aria-label={`Projetos na categoria ${category}`}
            className={`bg-blue-600 text-white px-4 py-2 rounded-md transition-opacity duration-300 ${
              selectedCategory === category ? "opacity-100" : "opacity-50 hover:opacity-75"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setSearchTerm("");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="flex justify-center mb-4 relative max-w-md w-full">
        <div className="absolute top-1 left-2 inline-flex items-center p-2">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar projetos por título ou descrição..."
          className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-400 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          aria-describedby="search-helper-text"
        />
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
      {filteredProjects.length === 0 && (
        <p id="search-helper-text" className="text-center mt-4 text-gray-600">Nenhum projeto encontrado.</p>
      )}
    </motion.div>
  );
};

export default Projetos;