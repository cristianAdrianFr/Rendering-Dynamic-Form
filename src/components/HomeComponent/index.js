import React, { Component } from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import {UsersSelect} from './Users';
import ProjectsSelect from './Projects';

import './index.css'


const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 16px'
};

const titleStyle = {
  display: 'flex',
  textAlign: 'center',
  fontSize: '30px'
};

class HomePage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            finished: false,
            stepIndex: 0,
        }
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 1,
        });

        if (stepIndex === 1) {
            const {
                userId,
                wholeProjects
            } = this.props;
            const data = {
                userId: userId,
                projects: wholeProjects.filter(project => {
                    return project.checked === true
                }).map(selectedProject => {
                    return {
                        id: selectedProject.id,
                        name: selectedProject.name,
                        role: selectedProject.role
                    }
                })
            };
            this.props.userSetting(data)
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <UsersSelect
                        userData={this.props.userData}
                        fetchUser={this.props.fetchUser}
                        selectedUserData={this.props.selectedUserData}
                    />
                );
            case 1:
                return (
                    <ProjectsSelect
                        wholeProjects={this.props.wholeProjects}
                        saveProject={this.props.saveProject}
                        removeProject={this.props.removeProject}
                    />
                );
            default:
                return 'Steps were completed. Please go back';
        }
    }

    stepTitle = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return 'Select User';

            case 1:
                return 'Select Project';

            default:
                return ''
        }
    };

    render () {
        const {finished, stepIndex} = this.state;
        const {pending} = this.props;

        return (
            <div className={'home-page'}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>User Part</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Project part</StepLabel>
                    </Step>
                </Stepper>
                {
                    !pending ?
                        <div style={contentStyle}>
                            {finished ? (
                                <p>
                                    <a
                                        href="#"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            this.setState({stepIndex: 0, finished: false});
                                        }}
                                    >
                                        Click here
                                    </a> to reset the example.
                                </p>
                            ) : (
                                <div>
                                    <p style={titleStyle}>
                                        {this.stepTitle(stepIndex)}
                                    </p>
                                    <div>{this.getStepContent(stepIndex)}</div>
                                    <div style={{marginTop: 12}}>
                                        <FlatButton
                                            label="Back"
                                            disabled={stepIndex === 0}
                                            onClick={this.handlePrev}
                                            style={{marginRight: 12}}
                                        />
                                        <RaisedButton
                                            label={stepIndex === 2 ? 'Finish' : 'Next'}
                                            primary={true}
                                            onClick={this.handleNext}
                                        />
                                    </div>
                                </div>
                            )}
                        </div> :
                        <CircularProgress size={60} thickness={7} />
                }
            </div>
        )
    }
}

export default HomePage;