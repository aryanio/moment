let priorities = {};

export function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

export function getPrioritizedUnits(unitsObj) {
    let units = [];
    for (let u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}
