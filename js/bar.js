var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var bx = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var by = d3.scale.linear()
    .range([height, 0]);

var xAxis1 = d3.svg.axis()
    .scale(bx)
    .orient("bottom");

var yAxis1 = d3.svg.axis()
    .scale(by)
    .orient("left")
    .ticks(10, "%");

var barGraph = d3.select("#barGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("dataBar.json", function(error, data1) {
    if (error) throw error;
    bx.domain(data1.map(function(d1) { return d1.state; }));
    by.domain([0, d3.max(data1, function(d1) { return d1.people; })]);

    barGraph.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis1)
        .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );

    barGraph.append("g")
        .attr("class", "y axis")
        .call(yAxis1)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("people");

    barGraph.selectAll(".bar")
        .data(data1)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d1) { return bx(d1.state); })
        .attr("width", bx.rangeBand())
        .attr("y", function(d1) { return by(d1.people); })
        .attr("height", function(d1) { return height - by(d1.people); });
});

function type(d1) {
    d1.people = +d1.people;
    return d1;
}