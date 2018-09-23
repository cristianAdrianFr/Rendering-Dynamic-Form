import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import RoleSelect from './Role';

const cardStyle = {
    display: 'flex'
};

class ProjectCard extends Component {
    constructor (props) {
        super(props)

        this.state = {
            open: false,
            projectId: null,
            projectRole: this.props.role
        }
    }

    handleOpen = (id) => {
        this.setState({open: true, projectId: id});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    cancelClose = () => {
        this.setState({open: false});
    };

    saveClose = () => {
        this.setState({open: false}, function () {
            this.props.saveProject(this.state.projectRole, this.props.order, this.props.id)
        });
    };

    removeClose = () => {
        this.setState({open: false}, function () {
            this.props.removeProject('viewer', this.props.order, this.props.id)
        });
    };

    selectRole = (ev, role) => {
      this.setState({ projectRole: role })
    };

    render () {
        const {open, projectRole} = this.state;
        const {
            id,
            title,
            role,
            checked
        } = this.props;

        return (
            <div onClick={() => this.handleOpen(id)}>
                <Card>
                    <CardHeader
                        title={title}
                        actAsExpander={true}
                    />
                    <CardText style={cardStyle}>
                        <Checkbox
                            label={checked ? 'Project was selected' : 'Select the project'}
                            checked={checked}
                        />
                        {
                            checked && <p>role: {role}</p>
                        }
                    </CardText>
                </Card>
                <RoleSelect
                    open={open}
                    role={projectRole}
                    checked={checked}
                    cancelClose={this.cancelClose}
                    saveClose={this.saveClose}
                    removeClose={this.removeClose}
                    handleClose={this.handleClose}
                    selectRole={this.selectRole}
                />
            </div>
        )
    }
}

export default ProjectCard;