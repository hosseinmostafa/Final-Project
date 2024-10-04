import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../../Services/navbar.service';
import { FooterService } from '../../Services/footer.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy{

  constructor(private navbarService: NavbarService, private footerServes: FooterService) { }

  ngOnInit(): void {
    this.navbarService.hideNavbar()
    this.footerServes.hideFooter()
  }

  ngOnDestroy(): void {
    this.navbarService.display();
  }
}
