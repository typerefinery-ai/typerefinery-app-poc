<template>
    <nav data-role="ribbonmenu">
      <ul class="tabs-holder">
        <li><a href="#section-1-1">Main</a></li>
        <li class="static"><a href="#">Static</a></li>
        <li><a href="#section-one">One</a></li>
        <li><a href="#section-two">Two</a></li>
        <li><a href="#section-three">Three</a></li>
      </ul>

      <div class="content-holder">
        <div class="section" id="section-1-1">
          <div class="group">
            <button class="ribbon-button">
              <span class="icon">
                <img src="../assets/share.svg" />
              </span>
              <span class="caption">Share</span>
            </button>

            <span class="title">Group title</span>
          </div>

          <div class="group">
            <button class="ribbon-button">
              <span class="icon">
                <img src="images/share.svg" />
              </span>
              <span class="caption">Share</span>
            </button>

            <span class="title">Group title</span>
          </div>
        </div>
        <div class="section" id="section-one">
          <div class="group">
            <button class="ribbon-button">
              <span class="icon">
                <img src="../assets/share.svg" />
              </span>
              <span class="caption">Share</span>
            </button>

            <span class="title">Group title</span>
          </div>

          <div class="group">
            <button class="ribbon-button">
              <span class="icon">
                <img src="../assets/share.svg" />
              </span>
              <span class="caption">Share</span>
            </button>

            <span class="title">Group title</span>
          </div>
        </div>
        <div class="section" id="section-three">
          <div class="group">

                <div data-role="button-group" data-cls-active="active">
                    <button class="ribbon-button">
                        <span class="icon">
                            <span class="mif-vertical-align-top"></span>
                        </span>
                        <span class="caption">Top</span>
                    </button>
                    <button class="ribbon-button">
                        <span class="icon">
                            <span class="mif-vertical-align-center"></span>
                        </span>
                        <span class="caption">Center</span>
                    </button>
                    <button class="ribbon-button">
                        <span class="icon">
                            <span class="mif-vertical-align-bottom"></span>
                        </span>
                        <span class="caption">Bottom</span>
                    </button>
                </div>

                <span class="title">Role group</span>
            </div>

            <div class="group">
                <div class="ribbon-toggle-group">
                    <button class="ribbon-icon-button">
                            <span class="icon">
                                <span class="mif-list"></span>
                            </span>
                        <span class="caption">List</span>
                    </button>

                    <button class="ribbon-icon-button">
                            <span class="icon">
                                <span class="mif-apps"></span>
                            </span>
                        <span class="caption">Content</span>
                    </button>

                    <button class="ribbon-icon-button">
                            <span class="icon">
                                <span class="mif-table"></span>
                            </span>
                        <span class="caption">Icons</span>
                    </button>

                    <button class="ribbon-icon-button">
                            <span class="icon">
                                <span class="mif-image"></span>
                            </span>
                        <span class="caption">Small icons</span>
                    </button>

                    <button class="ribbon-icon-button">
                            <span class="icon">
                                <span class="mif-images"></span>
                            </span>
                        <span class="caption">Large icons</span>
                    </button>

                    <button class="ribbon-icon-button">
                            <span class="icon">
                                <span class="mif-windows"></span>
                            </span>
                        <span class="caption">Tiles</span>
                    </button>
                </div>

                <span class="title">Group class</span>
            </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
    name:'tab',
}
</script>