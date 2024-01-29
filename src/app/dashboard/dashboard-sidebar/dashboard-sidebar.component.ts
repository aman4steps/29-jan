import { Component  } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import {  faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html', 
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent {
  // Dashboard logo 
  faHouse=faHouse;
  faBlog=faBlog;
  faImage=faImage;
  faFile=faFile;
  faPlaneDeparture=faPlaneDeparture;
  faCalendarDays=faCalendarDays;
  faCar=faCar;
  faSearchPlus=faSearchPlus;
  faGears=faGears;
  faRightFromBracket=faRightFromBracket;
  // End
  // containerVisible = false;

  // toggleContainer(val:string) {
  //   this.containerVisible = !this.containerVisible;
    
  // }


  // code is now here
  activeLink: string | null = null;

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
  // sub menu link
  activeSubLink: string | null = null;

  setActiveSubLink(link: string): void {
    this.activeSubLink = link;
  }
  

}
