<div layout="row" layout-wrap>
    <div class="hex-value primitive-sign" layout="row" layout-align="center center" aria-label="Random Primitive">
        <i class="material-icons color-primitive-random">donut_small</i>
    </div>
    <byte-view ng-repeat="byte in value.properties.value track by $index" offset="$index" value="byte" />
</div>

