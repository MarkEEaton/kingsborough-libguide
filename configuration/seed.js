window.Seed = (function () {
  const findItMenu = [
    {
      link: "https://library.kbcc.cuny.edu/az.php",
      icon: "fas fa-database fa-fw bigger-icon", 
      description: "Databases A to Z",
      id: 1
    },
    {
      link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/npsearch?vid=01CUNY_KB:CUNY_KB&search_scope=all",
      icon: "fas fa-newspaper fa-fw bigger-icon",
      description: "Newspaper Search",
      id: 2
    },
    {
      link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/search?vid=01CUNY_KB:CUNY_KB&tab=CourseReserves&search_scope=CourseReserves",
      icon: "fas fa-cloud-download-alt fa-fw bigger-icon",
      description: "Course Reserves",
      id: 3
    },
    {
      link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/jsearch?vid=01CUNY_KB:CUNY_KB",
      icon: "fas fa-book fa-fw bigger-icon",
      description: "Search for Specific Journals",
      id: 4
    },
    {
      link: "https://library.kbcc.cuny.edu/academicworks",
      icon: "fas fa-archive fa-fw bigger-icon",
      description: "CUNY Academic Works",
      id: 5
    },
    {
      link: "https://www.bkstr.com/kingsboroughccstore/home",
      icon: "fas fa-cash-register fa-fw bigger-icon",
      description: "KBCC Bookstore",
      id: 6
    }
  ]

  const servicesMenu = [
    {
      link: "http://kbcc.cuny.illiad.oclc.org/illiad/logon.html",
      icon: "fas fa-books fa-fw bigger-icon",
      description: "Interlibrary Loan",
      id: 1
    },
    {
      link: "https://library.kbcc.cuny.edu/libraryservices/informationliteracy",
      icon: "fas fa-chalkboard-teacher fa-fw bigger-icon",
      description: "Book a Library Instruction Session" ,
      id: 2
    },
    {
      link: "https://library.kbcc.cuny.edu/mediaservices",
      icon: "fas fa-photo-video fa-fw bigger-icon",
      description: "Media Services",
      id: 3
    },
    {
      link: "https://kbcc-cuny.libwizard.com/f/bookrequest",
      icon: "fas fa-shopping-basket fa-fw bigger-icon",
      description: "Suggest a Book for Purchase",
      id: 4
    },
    {
      link: "https://kbcc-cuny.libwizard.com/id/8cdb3f1a787de3c307a8cf5d75cad406",
      icon: "fas fa-bookmark fa-fw bigger-icon",
      description: "Suggest an Item to Add to Reserves",
      id: 5
    }
  ]

  const aboutUsMenu = [
    {
      link: "https://library.kbcc.cuny.edu/about-us/directory",
      icon: "fas fa-address-book fa-fw bigger-icon",
      description: "Faculty & Staff Directory",
      id: 1
    },
    {
      link: "https://library.kbcc.cuny.edu/newarrivals",
      icon: "far fa-mail-bulk fa-fw bigger-icon",
      description: "New Arrivals",
      id: 2
    },
    {
      link: "https://library.kbcc.cuny.edu/about-us/liaisons",
      icon: "fas fa-theater-masks fa-fw bigger-icon",
      description: "Subject Liaisons",
      id: 3
    },
    {
      link: "https://library.kbcc.cuny.edu/social",
      icon: "far fa-hashtag fa-fw bigger-icon",
      description: "Social Media",
      id: 4
    }
  ]

  const locationAndHoursMenu = [
    {
      link: "https://tour.kingsborough.edu/",
      icon: "fas fa-map-marked-alt fa-fw bigger-icon",
      description: "Campus Map",
      id: 1
    },
    {
      link: "https://library.kbcc.cuny.edu/calendar",
      icon: "fas fa-clock fa-fw bigger-icon",
      description: "Library Hours",
      id: 2
    }
  ]

  const helpMenu = [
    {
      link: "https://library.kbcc.cuny.edu/askalibrarian",
      icon: "fas fa-book-reader fa-fw bigger-icon",
      description: "Ask A Librarian",
      id: 1
    },
    {
      link: "https://library.kbcc.cuny.edu/faq",
      icon: "fas fa-question-circle fa-fw bigger-icon",
      description: "FAQ",
      id: 2
    },
    {
      link: "https://library.kbcc.cuny.edu/guides",
      icon: "fas fa-telescope fa-fw bigger-icon",
      desciption: "Research Guides and Tutorials",
      id: 3
    },
    {
      link: "https://library.kbcc.cuny.edu/ENGLISH24",
      icon: "fas fa-question fa-fw bigger-icon",
      description: "How to Use the Library",
      id: 4
    }
  ]
  return {
    findItMenu: findItMenu,
    servicesMenu: servicesMenu, 
    aboutUsMenu: aboutUsMenu,
    locationAndHoursMenu: locationAndHoursMenu,
    helpMenu: helpMenu
  };
}());
