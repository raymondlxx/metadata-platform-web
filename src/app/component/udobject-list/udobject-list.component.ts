import { Component, OnInit } from '@angular/core';
import { UDObject } from '../../module/udobject'
import { UDObjectService } from '../../service/udobject.service'

@Component({
	selector: 'app-udobject-list',
	templateUrl: './udobject-list.component.html',
	styleUrls: ['./udobject-list.component.css']
})
export class UdobjectListComponent implements OnInit {

	udobjects: UDObject[] = [];

	constructor(private udObjectService: UDObjectService) { }

	ngOnInit(): void {
		
		this.udObjectService.getUDObjects().then(response=> this.udobjects = response);
			console.log(this.udobjects);
	}

}
