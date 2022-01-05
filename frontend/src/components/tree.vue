<template>
  <div class="tree1">
    <div class="container-fluid">
      <div class="grid">
        <div class="row">
          <div class="cell" style="max-width: 20%">
            <div class="div1">
              <ul data-role="treeview">
                <li
                  data-icon="<span class='mif-user'></span>"
                  data-caption="Janothon"
                >
                  <ul>
                    <li data-icon="<span class='mif-copyright'></span>" data-caption="Connections" data-collapsed="true">
                      <ul>
                        <li data-caption="Localhost"></li>
                        <li data-caption="Production"></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li data-caption="Queries" data-collapsed="true">
                      <ul>
                        <li data-caption="TrainStation.tql"></li>
                        <li data-caption="Socialnetwork.tql"></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li data-caption="Theme" data-collapsed="true">
                      <ul>
                        <li data-caption="Theme Settings"></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li
                      data-icon="<span class='mif-library'></span>"
                      data-caption="Saved Projects"
                      data-collapsed="true"
                    >
                      <ul>
                        <li data-caption="My projects 1"></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li
                      data-icon="<span class='mif-star-full'></span>"
                      data-caption="Visualisation Projects"
                    >
                      <ul>
                        <li
                          data-icon="<span class='mif-library'></span>"
                          data-caption="New Projects"
                          data-collapsed="true"
                        >
                          <ul>
                            <li data-caption="Choose Connection"></li>
                            <li data-caption="choose query"></li>
                            <li data-caption="Layout Webcola"></li>
                            <li data-caption="webCola Visualistion"></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  
                </li>
                
              </ul>
            </div>
          </div>
          <div class="cell" style="max-width: 80%">
            <div class="grid">
              <div class="row">
                <div class="cell-6">Details  Window</div>
                <div class="cell-6">Visualisation Window</div>
              </div>
              <div class="row">
                <div class="cell-12">console Window</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../src/style.css";
export default {
  name: "tree",
};
</script>