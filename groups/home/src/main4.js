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
      :action="selecteditem.baseUrl"
      enctype="application/x-www-form-urlencoded; charset=utf-8"
  >
    <!-- default is "everything"  option suggested from OLS widget builder -->
    <div v-if="selecteditem.input" v-html="selecteditem.input"></div>
    <input name="vid" value="01CUNY_KB:CUNY_KB" type="hidden" />
    <input name="tab" :value="selecteditem.tab" type="hidden" />
    <input name="search_scope" :value="selecteditem.searchScope" type="hidden" />
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
        <div class="dropdown input-group zero-margin" id="blue-border1" ref="blueBorder1">
            <button class="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    ref="oneSearchMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-label="Define Your Search"
            >
                <span id="defineYourSearch">{{ displayeditem }}&nbsp;</span>
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu fade dropdown-margin" aria-labelledby="dropdownMenu1">
                <li>
                    <a v-for="(item, itemName) in materialtype"
                       :key="item.id"
                       class="searchmenu"
                       @click="selectdropdown(item, itemName)"
                    >
                        <div class="highlight-menu-item bigger-fancy-text">
                            <strong>{{ item.fullName }}</strong>
                        </div>
                    </a>
                    <a href="https://cuny-kb.primo.exlibrisgroup.com/discovery/search?vid=01CUNY_KB:CUNY_KB&lang=en&mode=advanced" class="searchmenu">
                        <div class="highlight-menu-item bigger-fancy-text">
                            <strong>Advanced Search</strong>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <label class="sr-only" for="primoQueryTemp">Search terms</label>
        <div class="input-group zero-margin form-width" id="blue-border2">
            <input class="form-control form-width inherit-height-from-flex"
                   name="queryTemp"
                   id="primoQueryTemp"
                   ref="primoQueryTempString"
                   type="search"
                   v-model="searchstring"
                   :placeholder="placeholderstring"
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
</form>`,
  methods: {
    selectdropdown(item, itemName) {
      this.displayeditem = itemName; // swap in current item at the top of the dropdown
      this.selecteditem = item; // store the data from the dropdown selection
      this.placeholderstring = "Enter search term here";
    },
    submitSearch() {
      if (this.displayeditem === "Define Your Search") {
        this.placeholderstring = "Please make a selection";
        this.searchstring = ""; // remove the search string
        if (!this.$refs.blueBorder1.classList.contains("open")) {
          // if the dropdown is not open
          this.$refs.oneSearchMenu.click(); // open the dropdown
        }
      } else {
        this.$refs.primoQueryString.value = `any,contains,${this.$refs.primoQueryTempString.value.replace(
          /[,]/g,
          " "
        )}`; // vueified OLS widget code
        this.$refs.oneSearchForm.submit(); // submit the form
      }
    },
  },
  data() {
    return {
      selecteditem: {}, // initialize the data from the dropdown selection
      searchstring: "", // initialize an empty search string
      placeholderstring: "Enter search term here", // initialize the placeholder
      displayeditem: "Define Your Search", // the text displayed a the top of the OneSearch dropdown
      materialtype: {
        Books: {
          fullName: "Books",
          baseUrl: "https://cuny-kb.primo.exlibrisgroup.com/discovery/search",
          tab: "Everything",
          searchScope: "IZ_CI_AW",
          input:
            '<input name="facet" value="rtype,include,books" type="hidden" />',
          id: 1,
        },
        Articles: {
          fullName: "Articles (Peer reviewed)",
          baseUrl: "https://cuny-kb.primo.exlibrisgroup.com/discovery/search",
          tab: "Everything",
          searchScope: "IZ_CI_AW",
          input:
            '<input name="mfacet" value="rtype,include,articles,1" type="hidden" /><input name="facet" value="tlevel,include,peer_reviewed" type="hidden" />',
          id: 2,
        },
        Reserves: {
          fullName: "Course reserves",
          baseUrl: "https://cuny-kb.primo.exlibrisgroup.com/discovery/search",
          tab: "CourseReserves",
          searchScope: "CourseReserves",
          input: "",
          id: 3,
        },
        Newspapers: {
          fullName: "Newspapers and Magazines",
          baseUrl: "https://cuny-kb.primo.exlibrisgroup.com/discovery/npsearch",
          tab: "Everything",
          searchScope: "IZ_CI_AW",
          input: "",
          id: 4,
        },
        Journals: {
          fullName: "Journals",
          baseUrl: "https://cuny-kb.primo.exlibrisgroup.com/discovery/jsearch",
          tab: "jsearch_slot",
          searchScope: "IZ_CI_AW",
          input: "",
          id: 5,
        },
      },
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
              link: "https://www.bkstr.com/kingsboroughccstore/home",
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
              link: "https://kbcc-cuny.libwizard.com/f/bookrequest",
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
