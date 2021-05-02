export interface Event {id: number,
  eventGroupId: number, eventName: string,
  eventCategory: number, eventOverView: string,
  scheduledStartDate: Date, expectedDeliveryDate: Date,
  fixedDeliveryDate: Date, expectedBillingDate: Date,
  customerCompany: string, customerStaff: string,
  progress: number, eventStatus: number,
  "status.name": string, "category.name": string
}
export interface Status {id: number,
  eventGroupId: number, name: string
}
export interface Category {id: number,
  eventGroupId: number, name: string
}

export interface Document {id: number,
  name: string, dispName: string
}
