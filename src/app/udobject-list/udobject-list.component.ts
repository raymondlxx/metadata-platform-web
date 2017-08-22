import { Component, OnInit } from '@angular/core';
import { UDObject } from '../module/udobject'
import { UDObjectService } from '../udobject.service'

@Component({
	selector: 'app-udobject-list',
	templateUrl: './udobject-list.component.html',
	styleUrls: ['./udobject-list.component.css']
})
export class UdobjectListComponent implements OnInit {

	udobjects: UDObject[] = [];

	constructor(private udObjectService: UDObjectService) { }

	ngOnInit(): void {
		
		this.udObjectService.getUDObjects().then(items=>this.udobjects = items);
			
	}

}
