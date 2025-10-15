.. raw:: html

    <div style="width: 800px; height: 600px; margin: 20px auto; position: relative; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <!-- 底层图片 -->
        <div id="layer1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
            <img src="EN-WarringStatesAll260BCE_modified.png" alt="基础图层" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        
        <!-- 第二层图片 -->
        <div id="layer2" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; opacity: 1;">
            <img src="EN-WesternZhouStates_modified.png" alt="第二图层" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        
        <!-- 第三层图片 -->
        <div id="layer3" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 3; opacity: 1;">
            <img src="EN-LateSpringAutumn_modified.png" alt="第三图层" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        <!-- 第四层图片 -->
        <div id="layer4" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 4; opacity: 1;">
            <img src="EN-LateSpringAutumn_modified.png" alt="第四图层" style="width: 100%; height: 100%; object-fit: contain;">
        </div>

        <!-- 控制按钮 -->
        <div style="position: absolute; bottom: 10px; left: 10px; z-index: 10; background: rgba(255,255,255,0.8); padding: 10px; border-radius: 5px;">
            <button onclick="toggleLayer('layer2')">显示/隐藏第二层</button>
            <button onclick="toggleLayer('layer3')">显示/隐藏第三层</button>
            <br><br>
            <label for="opacity2">第二层透明度: </label>
            <input type="range" id="opacity2" min="0" max="1" step="0.1" value="1" 
                   oninput="changeOpacity('layer2', this.value)">
            <br>
            <label for="opacity3">第三层透明度: </label>
            <input type="range" id="opacity3" min="0" max="1" step="0.1" value="1"
                   oninput="changeOpacity('layer3', this.value)">
        </div>
    </div>
    
    <script type="text/javascript">
        // 切换图层显示/隐藏
        function toggleLayer(layerId) {
            var layer = document.getElementById(layerId);
            if (layer.style.display !== 'none') {
                layer.style.display = 'none';
            } else {
                layer.style.display = 'block';
            }
        }
        
        // 改变图层透明度
        function changeOpacity(layerId, value) {
            var layer = document.getElementById(layerId);
            layer.style.opacity = value;
        }
    </script>
