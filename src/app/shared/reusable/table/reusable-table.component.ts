import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LicenciasService } from '../../../services/licencias.service';
import { RESTLicencias } from '../../../interfaces/rest-licencias';
import { FilterStatePipe } from '../../../pipes/filter-state.pipe';

@Component({
	selector: 'reusable-table',
	templateUrl: './reusable-table.component.html',
	styleUrls: ['./reusable-table.component.scss'],
	providers: [FilterStatePipe]
})
export class ReusableTableComponent implements OnInit {

	public filterStateType: string = '';
	public pageId: any = [];
	public pageIndex = 1;
	public beforePageIndex = 0;
	public indexIndicator: number[] = [];
	public auxData: any[] = [];
	@Input() data: any[]  = [];
	@Input() dataChange?: Observable<any> ;
	@Input() dataSource?: string;
	@Input() columns: any = [];
	@Input() filters: any = [];
	@Input() defaults: any = [];
	@Input() paginator = true;
	@Input() resultLength = 0;
	@Input() typeLicense = 'admin';
	@Input() action = true;
	@Output() returnActions = new EventEmitter();
	@Output() returnData = new EventEmitter();
	@Output() returnModal = new EventEmitter();
	@Output() returnSortable = new EventEmitter();

	constructor(private router: Router, private LicenciasService: LicenciasService) { }

	ngOnInit() {
		this.columns = this.columns;
		this.buildIndexPaginado();
	}
	ngOnChanges() {
		if (this.dataChange) {
			this.dataChange.subscribe((res: any) => {
				this.data = res;
				this.buildIndexPaginado();
			});
		}
	}

	detail(page: RESTLicencias) {
		this.pageId = page.id;
		this.LicenciasService.detail = page;
		this.router.navigate(['/licencias/detail/', this.pageId]);
	}

	accion(page: RESTLicencias) {
		this.pageId = page.id;
		this.LicenciasService.detail = page;
		this.router.navigate(['/licencias/acciones/', this.pageId]);
	}

	historial(hist: RESTLicencias){
		this.pageId = hist.user.cuil;
		this.LicenciasService.detail = hist;
		this.router.navigate(['/licencias/historial/', this.pageId]);
	}



// Paginado

	buildIndexPaginado() {
		let value = this.resultLength;
		if (this.paginator) { // pregunto si el paginado lo hace el Front o back
			value = this.data.length;
		}
		if (value > 10 && value <= 20) {
			this.indexIndicator = [1, 2];
		} else if (value > 20 && value <= 30) {
			this.indexIndicator = [1, 2, 3];
		} else if (value > 30) {
			this.indexIndicator = [1, 2, 3, 4];
		}
	}


	customIndex(customIndex: number) {
		this.pageIndex = customIndex;
		this.beforePageIndex = (this.pageIndex * 10) - 10;
	}

	sortable(column: any) {
		const direction = (column.split(',')[1] === '' || column.split(',')[1] === 'desc') ? 'desc' : 'asc';
		const orderBy = `${column},${direction}`;
		this.returnSortable.emit(orderBy);
	}

	getDoctor(doctor: any){
		console.log(doctor)
	}

}
