import React, {Component} from 'react';
import './index.css';
import Loading from '../../components/Common/Loading/Loading';
import Select from 'react-select';
import DropZone from 'react-dropzone';

const dropZoneStyle = {
  width: '100%',
  border: 'none'
};

class AddUserPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      age: '',
      gender: 'male',
      checkedSkills: new Map(),
      selectedExperience: '',
      selectedFields: '',
      file: '',
      description: '',
      errorAlert: false
    }
  }

  componentDidMount() {
    const {getForm} = this.props;
    getForm();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.addedUser !== this.props.addedUser && nextProps.addedUser === true) {
      this.props.history.push('/users');
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username ||
      !this.state.email ||
      !this.state.age ||
      [...this.state.checkedSkills.keys()].length < 1 ||
      !this.state.selectedFields ||
      !this.state.selectedExperience ||
      !this.state.file ||
      !this.state.description
    ) {
      this.setState({ errorAlert: true });
    } else {
      this.setState({ errorAlert: false });
      let formData = new FormData();
      const skills = [...this.state.checkedSkills.keys()];
      formData.append('username', this.state.username);
      formData.append('email', this.state.email);
      formData.append('age', this.state.age);
      formData.append('gender', this.state.gender);
      formData.append('skill', skills);
      formData.append('experience', this.state.selectedExperience.value);
      formData.append('field', this.state.selectedFields.map(item => item.value));
      formData.append('photo', this.state.file);
      formData.append('description', this.state.description);

      this.props.submitForm(formData);
    }
  };

  selectGender = (e) => {
    this.setState({ gender: e.currentTarget.value });
  };

  selectSkill = (e) => {
    this.setState({ checkedSkills: this.state.checkedSkills.set(e.currentTarget.name, e.currentTarget.checked) });
  };

  handleChangeFields = (field) => {
    this.setState({ selectedFields: field });
  };

  handleChangeSkill = (skill) => {
    this.setState({ selectedExperience: skill });
  };

  onDropPhoto = (accepted, rejected) => {
    this.setState({ file: accepted[0] });
  };

  onChangeField = (value, field) => {
    this.setState({ [field]: value });
  };

  fillFormField = (formField) => {
    return formField.map((field, i) => {
      switch (field.type) {
        case 'text':
          return (
            <div className={field.name} key={i}>
              <label>{field.name}</label>
              <input type="text" value={this.state[field.name]} onChange={(e) => this.onChangeField(e.currentTarget.value, field.name)} required />
            </div>
          );

        case 'email':
          return (
            <div className={field.name} key={i}>
              <label>{field.name}</label>
              <input type="email" value={this.state[field.name]} onChange={(e) => this.onChangeField(e.currentTarget.value, field.name)} required />
            </div>
          );

        case 'number':
          return (
            <div className={field.name} key={i}>
              <label>{field.name}</label>
              <input type="number" value={this.state[field.name]} onChange={(e) => this.onChangeField(e.currentTarget.value, field.name)} required />
            </div>
          );

        case 'radio':
          return (
            <div className={field.name}>
              {
                field.data.map((item, i) => {
                  return (
                    <div key={i}>
                      <label>{item}</label>
                      <input key={i} type="radio" name={field.name} value={item} checked={item === this.state.gender} onChange={this.selectGender} />
                    </div>
                  )
                })
              }
            </div>
          );

        case 'checkBox':
          return (
            <div className={field.name}>
              {
                field.data.map((item, i) => {
                  return (
                    <div key={i}>
                      <label>{item}</label>
                      <input key={i} type="checkbox" name={item} checked={this.state.checkedSkills.get(item)} onChange={this.selectSkill} />
                    </div>
                  )
                })
              }
            </div>
          );

        case 'textarea':
          return (
            <div className={field.name} key={i}>
              <label>{field.name}</label>
              <textarea value={this.state[field.name]} onChange={(e) => this.onChangeField(e.currentTarget.value, field.name)} required />
            </div>
          );

        case 'select':
          const {selectedFields, selectedExperience} = this.state;
          if (field.attr) {
            return (
              <Select
                key={i}
                className={field.name}
                placeholder={`Select the ${field.name}`}
                isMulti={true}
                value={selectedFields}
                onChange={this.handleChangeFields}
                options={
                  field.data.map(item => {
                    return {
                      value: item,
                      label: item
                    }
                  })
                }
              />
            )
          } else {
            return (
              <Select
                key={i}
                className={field.name}
                placeholder={`Select the ${field.name}`}
                isMulti={false}
                value={selectedExperience}
                onChange={this.handleChangeSkill}
                options={
                  field.data.map(item => {
                    return {
                      value: item,
                      label: item
                    }
                  })
                }
              />
            )
          }

        case 'file':
          return (
            <DropZone
              key={i}
              className={field.name}
              onDrop={this.onDropPhoto}
              style={dropZoneStyle}
            >
              <i className="fas fa-upload" />
              <span>choose the photo</span>
              <p>{ this.state.file && this.state.file.name}</p>
            </DropZone>
          );

        default:
          return 'no'
      }
    })
  };

  render() {
    const {
      pending,
      formFields
    } = this.props;
    return (
      <div className={'add-user-page'}>
        <div className={'add-user-title'}>
          <p>Add user into user list</p>
        </div>
        <div>
        <form onSubmit={this.onSubmit}>
          {this.fillFormField(formFields)}
          <p className={'error-message'}>{this.state.errorAlert && 'Complete all fields!'}</p>
          <button onClick={this.onSubmit}>Submit User</button>
        </form>
        </div>
        { pending && <Loading/> }
      </div>
    )
  }
}

export default AddUserPage;