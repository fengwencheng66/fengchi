document.addEventListener('DOMContentLoaded', function() {
    // 获取所有复选框和对应的图层
    const checkboxes = document.querySelectorAll('.layer-checkbox');
    const layers = document.querySelectorAll('.layer');
    
    // 为每个复选框添加事件监听
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            // 根据复选框状态显示/隐藏对应图层
            layers[index].style.opacity = this.checked ? '1' : '0';
        });
    });
});