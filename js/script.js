document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
    });
});

window.addEventListener('beforeunload', function(event) {
            // 强制刷新页面
            location.reload(true);
        });
