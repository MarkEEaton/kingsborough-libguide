const hamburgerComponent = {
  template: `<div class="bigger-fancy-text">
    <i v-bind:class="item.icon" aria-hidden="true"></i>
    <strong>{{ item.description }}</strong>
  </div>`,
  props: ["item"],
};

const navigComponent = {
  template: `<nav class="navbar navbar-default main-nav-container">
    <div class="container-fluid">
      <ul class="nav navbar-nav" id="navbar-center">
        <li v-for="(navmenu, navkey) in navlistofmenus"
            v-bind:key="navmenu.id"
            class="dropdown main-nav-dropdown"
        >
          <a>
            <a class="dropdown-toggle ga-main-navbar"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false"
            >
              <div class="caret-text">{{ navkey }}</div>
              <div class="fancy-caret"><i class="fas fa-angle-down" aria-hidden="true"></i></div>
            </a>
            <ul class="dropdown-menu fade dropdown-margin">
              <li>
                <a v-for="item in navmenu.data"
                   v-bind:key="item.id"
                   class="searchmenu"
                   v-bind:aria-label="item.description"
                   v-bind:href="item.link"
                   v-bind:target="item.target_blank"
                >
                  <div class="bigger-fancy-text">
                    <i v-bind:class="item.icon" aria-hidden="true"></i>
                    <strong>{{ item.description }}</strong>
                  </div>
                </a>
              </li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  </nav>`,
  props: ["navlistofmenus"],
};

const onesearchComponent = {
  template: `<form class="form-inline onesearch-jumbotron"
      name="searchPrimoForm1"
      ref="oneSearchForm"
      role="search"
      method="get"
      action="https://cuny-kb.primo.exlibrisgroup.com/discovery/search"
      enctype="application/x-www-form-urlencoded; charset=utf-8"
  >
    <!-- default is "everything"  option suggested from OLS widget builder -->
    <input name="facet" :value="facet" type="hidden"/>
    <input name="mfacet" :value="mfacet" type="hidden" />
    <input name="vid" value="01CUNY_KB:CUNY_KB" type="hidden" />
    <input name="tab" value="Everything" type="hidden" />
    <input name="search_scope" value="IZ_CI_AW" type="hidden" />
    <input name="mode" value="basic" type="hidden" />
    <input name="highlight" value="true" type="hidden" />
    <input name="displayMode" value="full" type="hidden" />
    <input name="bulkSize" value="10" type="hidden" />
    <input name="dum" value="true" type="hidden" />
    <input name="displayField" value="all" type="hidden" />
    <input name="pcAvailabiltyMode" value="false" type="hidden" />
    <input name="query" ref="primoQueryString" type="hidden" />
    <h1 id="onesearch-header">
        <a href="https://cuny-kb.primo.exlibrisgroup.com/discovery/search?tab=Everything&vid=01CUNY_KB:CUNY_KB&lang=en">
            <img class="image-fail onesearchsubmit" src="https://libapps.s3.amazonaws.com/accounts/16298/images/onesearch_logo.png" alt="OneSearch" />
        </a>
    </h1>
    <div class="form-group" id="flex-search-form">
        <label class="sr-only" for="primoQueryTemp">Search terms</label>
        <div class="input-group zero-margin form-width" id="blue-border2">
            <input class="form-control inherit-height-from-flex"
                   name="queryTemp"
                   id="primoQueryTemp"
                   ref="primoQueryTempString"
                   type="search"
                   v-model="searchstring"
                   aria-label="Search terms"
                   placeholder="Enter search term here"
             />
        </div>
        <div class="input-group zero-margin" id="blue-border3">
            <input type="submit"
                   class="btn btn-default form-control onesearchsubmit inherit-height-from-flex"
                   value="Search"
                   @click.stop.prevent="submitSearch"
            />
        </div>
    </div>
    <fieldset id="radios">
        <legend class="sr-only">Limit search to</legend>

        <input type="radio" 
               name="radio1"
               id="booksradio"
               @click="selectradio('rtype,include,books', '')"
        >
        <label for="booksradio">Books</label>

        <div class="radiocontainer">
            <input type="radio"
                   name="radio1"
                   id="articlesradio"
                   @click="selectradio('tlevel,include,peer_reviewed', 'rtype,include,articles,1')"
            >
            <label for="articlesradio">Articles (Peer reviewed)</label>
        </div>

        <div class="radiocontainer">
            <input type="radio"
                   name="radio1"
                   id="everythingradio"
                   @click="selectradio('', '')"
            >
            <label for="everythingradio">Everything</label>
        </div>
    </fieldset>
    <div id="advanced">
        <strong>
            <a href="https://cuny-kb.primo.exlibrisgroup.com/discovery/search?vid=01CUNY_KB:CUNY_KB&lang=en&mode=advanced">Advanced</a>
        </strong>
    </div>
</form>`,
  methods: {
    selectradio(radiooutputfacet, radiooutputmfacet) {
      this.facet = radiooutputfacet; // store the data from the radio selection
      this.mfacet = radiooutputmfacet;
    },
    submitSearch() {
      this.$refs.primoQueryString.value = `any,contains,${this.$refs.primoQueryTempString.value.replace(
        /[,]/g,
        " "
      )}`; // vueified OLS widget code
      this.$refs.oneSearchForm.submit(); // submit the form
    },
  },
  data() {
    return {
      facet: "", // initialize the data from the radio selection
      mfacet: "",
    };
  },
};

const { createApp } = Vue;

const app1 = createApp({
  components: {
    "navig-component": navigComponent,
    "hamburger-component": hamburgerComponent,
  },
  data() {
    return {
      hamburger: [
        {
          link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/search?tab=Everything&vid=01CUNY_KB:CUNY_KB&lang=en",
          icon: "fas fa-search fa-fw bigger-icon",
          description: "OneSearch",
          target_blank: "",
          id: 1,
        },
        {
          link: "https://library.kbcc.cuny.edu/az.php",
          icon: "fas fa-database fa-fw bigger-icon",
          description: "Databases A to Z",
          target_blank: "",
          id: 2,
        },
        {
          link: "https://library.kbcc.cuny.edu/guides",
          icon: "fas fa-telescope fa-fw bigger-icon",
          description: "Research Guides",
          target_blank: "",
          id: 3,
        },
        {
          link: "https://library.kbcc.cuny.edu/faq",
          icon: "fas fa-question-circle fa-fw bigger-icon",
          description: "FAQ",
          target_blank: "",
          id: 4,
        },
        {
          link: "https://library.kbcc.cuny.edu/calendar",
          icon: "fas fa-clock fa-fw bigger-icon",
          description: "Library Hours",
          target_blank: "",
          id: 5,
        },
        {
          link: "https://library.kbcc.cuny.edu/sitemap",
          icon: "fas fa-location-arrow fa-fw bigger-icon",
          description: "Site Map",
          target_blank: "",
          id: 6,
        },
      ],
      navlistofmenus: {
        "Find It": {
          id: 1,
          data: [
            {
              link: "https://library.kbcc.cuny.edu/az.php",
              icon: "fas fa-database fa-fw bigger-icon",
              description: "Databases A to Z",
              target_blank: "",
              id: 1,
            },
            {
              link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/npsearch?vid=01CUNY_KB:CUNY_KB&search_scope=all",
              icon: "fas fa-newspaper fa-fw bigger-icon",
              description: "Newspaper Search",
              target_blank: "",
              id: 2,
            },
            {
              link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/search?vid=01CUNY_KB:CUNY_KB&tab=CourseReserves&search_scope=CourseReserves",
              icon: "fas fa-cloud-download-alt fa-fw bigger-icon",
              description: "Course Reserves",
              target_blank: "",
              id: 3,
            },
            {
              link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/jsearch?vid=01CUNY_KB:CUNY_KB",
              icon: "fas fa-book fa-fw bigger-icon",
              description: "Search for Specific Journals",
              target_blank: "",
              id: 4,
            },
            {
              link: "https://library.kbcc.cuny.edu/academicworks",
              icon: "fas fa-archive fa-fw bigger-icon",
              description: "CUNY Academic Works",
              target_blank: "_blank",
              id: 5,
            },
            {
              link: "https://kbcc.textbookx.com/institutional/index.php",
              icon: "fas fa-cash-register fa-fw bigger-icon",
              description: "KBCC Bookstore",
              target_blank: "_blank",
              id: 6,
            },
          ],
        },
        Services: {
          id: 2,
          data: [
            {
              link: "https://kbcc-cuny.illiad.oclc.org/illiad/logon.html",
              icon: "fas fa-books fa-fw bigger-icon",
              description: "Interlibrary Loan",
              target_blank: "_blank",
              id: 1,
            },
            {
              link: "https://library.kbcc.cuny.edu/libraryservices/informationliteracy",
              icon: "fas fa-chalkboard-teacher fa-fw bigger-icon",
              description: "Book a Library Instruction Session",
              target_blank: "",
              id: 2,
            },
            {
              link: "https://library.kbcc.cuny.edu/mediaservices",
              icon: "fas fa-photo-video fa-fw bigger-icon",
              description: "Media Services",
              target_blank: "",
              id: 3,
            },
            {
              link: "https://kbcc-cuny.libanswers.com/form?queue_id=6967",
              icon: "fas fa-shopping-basket fa-fw bigger-icon",
              description: "Suggest a Book for Purchase",
              target_blank: "",
              id: 4,
            },
            {
              link: "https://kbcc-cuny.libwizard.com/id/8cdb3f1a787de3c307a8cf5d75cad406",
              icon: "fas fa-bookmark fa-fw bigger-icon",
              description: "Suggest an Item to Add to Reserves",
              target_blank: "",
              id: 5,
            },
          ],
        },
        "About Us": {
          id: 3,
          data: [
            {
              link: "https://library.kbcc.cuny.edu/about-us/directory",
              icon: "fas fa-address-book fa-fw bigger-icon",
              description: "Faculty & Staff Directory",
              target_blank: "",
              id: 1,
            },
            {
              link: "https://library.kbcc.cuny.edu/newarrivals",
              icon: "far fa-mail-bulk fa-fw bigger-icon",
              description: "New Arrivals",
              target_blank: "",
              id: 2,
            },
            {
              link: "https://library.kbcc.cuny.edu/about-us/liaisons",
              icon: "fas fa-theater-masks fa-fw bigger-icon",
              description: "Subject Liaisons",
              target_blank: "",
              id: 3,
            },
            {
              link: "https://library.kbcc.cuny.edu/social",
              icon: "far fa-hashtag fa-fw bigger-icon",
              description: "Social Media",
              target_blank: "",
              id: 4,
            },
            {
              link: "https://cuny-kb.alma.exlibrisgroup.com/discovery/collectionDiscovery?vid=01CUNY_KB:CUNY_KB",
              icon: "fa-solid fa-star fa-fw bigger-icon",
              description: "Featured Collections",
              target_blank: "",
              id: 5,
            },
          ],
        },
        "Location & Hours": {
          id: 4,
          data: [
            {
              link: "https://tour.kingsborough.edu/",
              icon: "fas fa-map-marked-alt fa-fw bigger-icon",
              description: "Campus Map",
              target_blank: "",
              id: 1,
            },
            {
              link: "https://library.kbcc.cuny.edu/calendar",
              icon: "fas fa-clock fa-fw bigger-icon",
              description: "Library Hours",
              target_blank: "",
              id: 2,
            },
          ],
        },
        Help: {
          id: 5,
          data: [
            {
              link: "https://library.kbcc.cuny.edu/askalibrarian",
              icon: "fas fa-book-reader fa-fw bigger-icon",
              description: "Ask A Librarian",
              target_blank: "",
              id: 1,
            },
            {
              link: "https://library.kbcc.cuny.edu/faq",
              icon: "fas fa-question-circle fa-fw bigger-icon",
              description: "FAQ",
              target_blank: "",
              id: 2,
            },
            {
              link: "https://library.kbcc.cuny.edu/guides",
              icon: "fas fa-telescope fa-fw bigger-icon",
              description: "Research Guides and Tutorials",
              target_blank: "",
              id: 3,
            },
            {
              link: "https://library.kbcc.cuny.edu/ENGLISH24",
              icon: "fas fa-question fa-fw bigger-icon",
              description: "How to Use the Library",
              target_blank: "",
              id: 4,
            },
          ],
        },
      },
    };
  },
});
app1.mount("#app1");

const app2 = createApp({
  components: {
    "onesearch-component": onesearchComponent,
  },
});
app2.mount("#app2");

