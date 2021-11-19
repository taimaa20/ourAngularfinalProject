import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';
@Component({
  selector: 'app-new-car-dialog',
  templateUrl: './new-car-dialog.component.html',
  styleUrls: ['./new-car-dialog.component.css']
})
export class NewCarDialogComponent implements OnInit {
  /*  p.Add("@VehicleName", newCarLicensing.VehicleName, dbType: DbType.String, direction: ParameterDirection.Input);
  
              p.Add("@VehicleModel", newCarLicensing.VehicleModel, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@VehicleColor", newCarLicensing.VehicleColor, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@VehicleCategory", newCarLicensing.VehicleCategory, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@UseType", newCarLicensing.UseType, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@RegisterType", newCarLicensing.RegisterType, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@LicenseNumber", newCarLicensing.LicenseNumber, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@LicenseExpiry", newCarLicensing.LicenseExpiry, dbType: DbType.DateTime, direction: ParameterDirection.Input);
              p.Add("@EngineCapacity", newCarLicensing.EngineCapacity, dbType: DbType.Int32, direction: ParameterDirection.Input);
              p.Add("@EngineType", newCarLicensing.EngineType, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@MadeYear", newCarLicensing.MadeYear, dbType: DbType.DateTime, direction: ParameterDirection.Input);
              p.Add("@LicensingCenter", newCarLicensing.LicensingCenter, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@ChassisNumber", newCarLicensing.ChassisNumber, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@EngineNumber", newCarLicensing.EngineNumber, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@Address", newCarLicensing.Address, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@VehicleImage", newCarLicensing.VehicleImage, dbType: DbType.String, direction: ParameterDirection.Input);
              p.Add("@UserId", newCarLicensing.UserId, dbType: DbType.Int32, direction: ParameterDirection.Input);
              p.Add("@LicensingId", newCarLicensing.LicensingId, dbType: DbType.Int32, direction: ParameterDirection.Input);
              p.Add("@InsuranceId", newCarLicensing.InsuranceId, dbType: DbType.Int32, direction: ParameterDirection.Input);*/

  formGroup = new FormGroup({
    vehicleName: new FormControl('', [Validators.required]),
    vehicleModel: new FormControl('', [Validators.required]),
    vehicleColor: new FormControl('', [Validators.required]),
    vehicleCategory: new FormControl('', [Validators.required]),
    useType: new FormControl('', [Validators.required]),
    registerType: new FormControl('', [Validators.required]),
    licenseNumber: new FormControl('', [Validators.required]),
    licenseExpiry: new FormControl('', [Validators.required]),
    engineCapacity: new FormControl('', [Validators.required]),
    engineType: new FormControl('', [Validators.required]),
    madeYear: new FormControl('', [Validators.required]),
    licensingCenter: new FormControl('', [Validators.required]),
    chassisNumber: new FormControl('', [Validators.required]),
    engineNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    // vehicleImage: new FormControl('', [Validators.required]),
    // userId: new FormControl('', [Validators.required]),
    licensingId: new FormControl('', [Validators.required]),
    insuranceId: new FormControl('', [Validators.required]),

  })
  constructor(public home: HomeService) { }

  ngOnInit(): void {
  }
  vehicleNamedata: any;
  vehicleModeldata: any;
  vehicleColordata: any;
  vehicleCategorydata: any;
  useTypedata: any;
  registerTypedata: any;
  licenseNumberdata: any;
  licenseExpirydata: any;
  engineCapacitydata: any;
  engineTypedata: any;
  madeYeardata: any;
  licensingCenterdata: any;
  chassisNumberdata: any;
  engineNumberdata: any;
  addressdata: any;
  vehicleImagedata: string="image";
 
  licensingIddata: any;
  insuranceIddata: any;
   user:any=localStorage.getItem('user');
   user1=JSON.parse(this.user);
          
   userIddata=parseInt(this.user1.email)

  saveItem() {
    debugger
    this.vehicleNamedata = this.formGroup.value.vehicleName;
    this.vehicleModeldata = this.formGroup.value.vehicleModel;
    this.vehicleColordata = this.formGroup.value.vehicleColor;
    this.vehicleCategorydata = this.formGroup.value.vehicleCategory;
    this.useTypedata = this.formGroup.value.useType;
    this.registerTypedata = this.formGroup.value.registerType;
    this.licenseNumberdata = this.formGroup.value.licenseNumber;
    this.licenseExpirydata = this.formGroup.value.licenseExpiry;
    this.engineCapacitydata = this.formGroup.value.engineCapacity;
    this.engineTypedata = this.formGroup.value.engineType;
    this.madeYeardata = this.formGroup.value.madeYear;
    this.licensingCenterdata = this.formGroup.value.licensingCenter;
    this.chassisNumberdata = this.formGroup.value.chassisNumber;
    this.engineNumberdata = this.formGroup.value.engineNumber;
    this.addressdata = this.formGroup.value.address;
    this.vehicleImagedata = this.vehicleImagedata;
    this.userIddata = this.userIddata;
    this.licensingIddata = this.formGroup.value.licensingId;
    this.insuranceIddata = this.formGroup.value.insuranceId;

    const data2 = {
      vehicleName: this.vehicleNamedata,
      vehicleModel: this.vehicleModeldata,
      vehicleColor: this.vehicleColordata,
      vehicleCategory: this.vehicleCategorydata,
      useType: this.useTypedata,
      registerType: this.registerTypedata,
      licenseNumber: this.licenseNumberdata,
      licenseExpiry: this.licenseExpirydata,
      engineCapacity: parseInt(this.engineCapacitydata),
      engineType: this.engineTypedata,
      madeYear: this.madeYeardata,
      licensingCenter: this.licensingCenterdata,
      chassisNumber: this.chassisNumberdata,
      engineNumber: this.engineNumberdata,
      address: this.addressdata,
      vehicleImage: this.vehicleImagedata,
      userId: this.userIddata,
      licensingId: parseInt(this.licensingIddata),
      insuranceId: parseInt(this.insuranceIddata)


    }
    console.log(data2)
    this.home.InsertNewCarLicensing(data2);
    // window.location.reload();

  }
}
