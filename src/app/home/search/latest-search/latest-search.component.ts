import { Component, Input } from "@angular/core";

@Component({
    selector:'latest-search',
    templateUrl:'latest-search.component.html',
    styleUrls:['latest-search.component.scss']
})
export class LatestSearchComponent{
    @Input() latestSearch = [
        'Salad',
        'Melanzane',
        'Lotus cake',
        'Trapani catering'
    ]
    @Input()popularSearches = [
              'Pasta',
              'Salad',
              'soup',
              'Pizza',
              'Burger',
              'Drinks',
              'Cheesecake',
              'Mocktails',
              'Desserts',
              'Pescheria'
    ]
}