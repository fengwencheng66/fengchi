图层叠加演示
============

.. raw:: html

    <div class="layer-controls">
        <label><input type="checkbox" class="layer-checkbox" checked> 背景层</label>
        <label><input type="checkbox" class="layer-checkbox" checked> 建筑层</label>
        <label><input type="checkbox" class="layer-checkbox" checked> 道路层</label>
        <label><input type="checkbox" class="layer-checkbox" checked> 文字标注层</label>
    </div>
    
    <div class="layers-container">
        <!-- 图层按照从下到上的顺序排列 -->
        <div class="layer">
            <img src="_static/images/background.jpg" alt="背景图层">
        </div>
        <div class="layer">
            <img src="_static/images/buildings.jpg" alt="建筑图层">
        </div>
        <div class="layer">
            <img src="_static/images/roads.jpg" alt="道路图层">
        </div>
        <div class="layer">
            <img src="_static/images/labels.png" alt="文字标注图层">
        </div>
    </div>

.. toctree::
   :maxdepth: 2