import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    allPosts = [
        {
            title: 'Mon titre 1',
            content: 'Mon contenu 1',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Mon titre 2',
            content: 'Mon contenu 2',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Mon titre 3',
            content: 'Mon contenu 3',
            loveIts: 0,
            created_at: new Date()
        },
    ];
}
