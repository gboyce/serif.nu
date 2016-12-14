import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  schools: {
    marginBottom: '3px',
    marginLeft: '3px',
    marginRight: '3px',
    width: '50px'
  },
  subjects: {
    marginBottom: '3px'
  },
  courses: {
    marginBottom: '3px'
  },
  sections: {
    marginBottom: '5px'
  },
  components: {
    marginBottom: '5px'
  }
};

const Browse = (
  {
    currentView,
    selected,
    schools,
    subjects,
    courses,
    sections,
    details,
    showSubjects,
    showCourses,
    showSections,
    checkComponents,
    addCourse,
    addComponent
  }
) => {
  switch (currentView) {
    case 'schools':
      return (
        <div>
          {schools.map((school) => (
            <RaisedButton
              key={school.id}
              label={school.id}
              onClick={() => showSubjects(school.id)}
              primary
              style={style.schools}
            />
          ))}
        </div>
      );
    case 'subjects':
      return (
        <div>
          {subjects.map((subject) => (
            <RaisedButton
              key={subject.abbv}
              label={subject.name}
              onClick={() => showCourses(selected.school, subject.abbv)}
              fullWidth
              primary
              style={style.subjects}
            />
          ))}
        </div>
      );
    case 'courses':
      return (
        <div>
          {courses.map((course) => (
            <RaisedButton
              key={course.abbv}
              label={course.name}
              onClick={() => showSections(selected.school, selected.subject, course.abbv)}
              fullWidth
              style={style.courses}
            />
          ))}
        </div>
      );
    case 'sections':
      return (
        <div>
          {sections.map((section) => (
            <Card key={section.section} style={style.sections}>
              <CardTitle title={`Section ${section.section}`} subtitle={section.meeting_time} />
              <CardActions>
                <FlatButton
                  label="Add Course"
                  onClick={() => {
                    checkComponents(selected.school, selected.subject, selected.course, section.id);
                    addCourse(section);
                  }}
                />
              </CardActions>
            </Card>
          ))}
        </div>
      );
    case 'components':
      console.log(details);
      return (
        <div>
          {details.associated_classes.map((comp, index) => (
            <Card key={index}  style={style.components}>
              <CardTitle title={comp.component} subtitle={comp.meeting_time} />
              <CardActions>
                <FlatButton
                  label="Add Component"
                />
              </CardActions>
            </Card>
          ))}
        </div>
      );
    default:
      return <div></div>;
  }
};

Browse.propTypes = {
  currentView: React.PropTypes.string.isRequired,
  selected: React.PropTypes.object.isRequired,
  schools: React.PropTypes.array,
  subjects: React.PropTypes.array,
  courses: React.PropTypes.array,
  sections: React.PropTypes.array,
  details: React.PropTypes.object,
  showSubjects: React.PropTypes.func.isRequired,
  showCourses: React.PropTypes.func.isRequired,
  showSections: React.PropTypes.func.isRequired,
  checkComponents: React.PropTypes.func.isRequired,
  addCourse: React.PropTypes.func.isRequired,
  addComponent: React.PropTypes.func.isRequired
};

export default Browse;
