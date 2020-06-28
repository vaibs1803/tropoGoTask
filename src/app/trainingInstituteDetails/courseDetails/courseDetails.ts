export class CourseDetails {

    constructor(
      public courseName = '',
      public aircraftType = '',
      public batch = '',
      public startDate = '',
      public endDate = '',
      public courseLocation?: string,
      public courseLanguage?: string,
      public courseCost?: string,
      public isWeekendCourse = false,
      public courseDetail?: string) { }
  }
  