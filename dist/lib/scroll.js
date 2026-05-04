export function scrollIntoView() {
    let allObservers = [];
    function addObserver(targets, callback, observerOptions = { threshold: 0.5 }) {
        const configuredThreshold = observerOptions.threshold ?? 0.5;
        const requiredRatio = Array.isArray(configuredThreshold)
            ? Math.max(...configuredThreshold)
            : configuredThreshold;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > requiredRatio) {
                    observer.unobserve(entry.target);
                    callback(entry.target);
                }
            });
        }, observerOptions);
        for (let i = 0; i < targets.length; i++) {
            observer.observe(targets[i]);
        }
        allObservers.push(observer);
    }
    function removeNamedObserver(name) {
        for (let i = 0; i < allObservers.length; i++) {
            if (allObservers[i].name === name) { // REMOVE ANY?
                allObservers[i].disconnect();
                allObservers.splice(i, 1);
                i--;
            }
        }
    }
    function removeAllObservers() {
        for (let i = 0; i < allObservers.length; i++) {
            allObservers[i].disconnect();
        }
        allObservers = [];
    }
    return {
        addObserver,
        removeNamedObserver,
        removeAllObservers
    };
}
//# sourceMappingURL=scroll.js.map