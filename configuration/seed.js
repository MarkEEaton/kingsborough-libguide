window.Seed = (function () {
  const findItMenu = [
    {
      link: "https://library.kbcc.cuny.edu/az.php",
      icon: "fas fa-database fa-fw bigger-icon", 
      description: "Databases A to Z"
    },
    {
      link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/npsearch?vid=01CUNY_KB:CUNY_KB&search_scope=all",
      icon: "fas fa-newspaper fa-fw bigger-icon",
      description: "Newspaper Search" 
    },
    {
      link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/search?vid=01CUNY_KB:CUNY_KB&tab=CourseReserves&search_scope=CourseReserves",
      icon: "fas fa-cloud-download-alt fa-fw bigger-icon",
      description: "Course Reserves"
    },
    {
      link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/jsearch?vid=01CUNY_KB:CUNY_KB",
      icon: "fas fa-book fa-fw bigger-icon",
      description: "Search for Specific Journals"
    },
    {
      link: "https://library.kbcc.cuny.edu/academicworks",
      icon: "fas fa-archive fa-fw bigger-icon",
      description: "CUNY Academic Works"
    },
    {
      link: "https://www.bkstr.com/kingsboroughccstore/home",
      icon: "fas fa-cash-register fa-fw bigger-icon",
      description: "KBCC Bookstore"
    }
  ]
  return {
    findItMenu: findItMenu,
  };
}());
