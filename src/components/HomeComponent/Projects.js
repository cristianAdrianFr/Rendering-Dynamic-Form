import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

class ProjectsSelect extends Component {

    render () {
        const {wholeProjects, saveProject, removeProject} = this.props;

        return (
            <div className={'project-step'}>
                <div className={'project-card-part'}>
                    {
                        wholeProjects.map((card, i) =>
                            <ProjectCard
                                key={i}
                                id={card.id}
                                order={i}
                                title={card.name}
                                checked={card.checked}
                                role={card.role}
                                saveProject={saveProject}
                                removeProject={removeProject}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ProjectsSelect;