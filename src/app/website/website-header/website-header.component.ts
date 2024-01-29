import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-website-header',
  templateUrl: './website-header.component.html',
  styleUrl: './website-header.component.css'
})
export class WebsiteHeaderComponent {
  faSearch=faSearch
  faMicrophone=faMicrophone
  faPhone=faPhone
  faHeart=faHeart
  faBell=faBell
  faUser=faUser
  faBars=faBars
}
