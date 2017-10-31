import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks = [
    {
      name: 'Reddit',
      icon: 'fa-reddit',
      links: [
        {
          name: '/r/Dota2',
          link: 'http://www.reddit.com/r/Dota2'
        },
        {
          name: '/r/Unixporn',
          link: 'http://www.reddit.com/r/unixporn'
        },
        {
          name: '/r/startpages',
          link: 'http://www.reddit.com/r/startpages'
        },
        {
          name: '/r/archlinux',
          link: 'http://www.reddit.com/r/archlinux'
        }
      ]
    },
    {
      name: 'Communication',
      icon: 'fa-comments',
      links : [
        {
          name: 'Whatsapp',
          link: 'https://web.whatsapp.com'
        },
        {
          name: 'Gmail - Personal',
          link: 'https://mail.google.com/mail/u/0/#inbox'
        },
        {
          name: 'Gmail - Uni',
          link: 'https://mail.google.com/mail/u/1/#inbox'
        }
      ]
    },
    {
      name: 'Web dev',
      icon: 'fa-code',
      links: [
        {
          name: 'Bootstrap',
          link: 'https://getbootstrap.com/docs/4.0/getting-started/introduction/'
        },
        {
          name: 'Font Awesome',
          link: 'http://fontawesome.io/'
        },
        {
          name: 'Angular 4',
          link: 'https://angular.io/docs'
        },
        {
          name: 'W3 Schools',
          link: 'http://www.w3schools.com'
        },
        {
          name: 'Angular Material',
          link: 'https://material.angular.io/components/categories'
        }
      ]
    },
    {
      name: 'Music',
      icon: 'fa-headphones',
      links: [
        {
          name: 'Soundcloud',
          link: 'https://soundcloud.com/stream'
        },
        {
          name: 'Mellow Mix',
          link: 'https://soundcloud.com/russell9704/sets/melodic-and-relaxing'
        },
        {
          name: 'Mellow Mix 2',
          link: 'https://soundcloud.com/russell9704/sets/mellow-mix-2'
        },
        {
          name: 'MrSuicideSheep',
          link: 'https://www.youtube.com/user/MrSuicideSheep'
        },
        {
          name: 'ChilloutDeer',
          link: 'https://www.youtube.com/chilloutdeer'
        }
      ]
    },
    {
      name: 'UP',
      icon: '',
      links: [
        {
          name: 'CS dept',
          link: 'http://www.cs.up.ac.za'
        },
        {
          name: 'Blackboard',
          link: 'http://clickup.ac.za'
        },
        {
          name: 'Tuks',
          link: 'http://www.up.ac.za'
        }
      ]
    },
    {
      name: 'Dota 2',
      icon: '',
      links: [
        {
          name: 'Liquipedia Wiki',
          link: 'http://wiki.teamliquid.net/dota2/Main_Page'
        },
        {
          name: 'Liquid Dota',
          link: 'http://www.liquiddota.com/'
        },
        {
          name: 'OpenDota',
          link: 'https://www.opendota.com/players/226286745'
        },
        {
          name: 'Dota 2 Blog',
          link: 'http://blog.dota2.com/?l=english'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
