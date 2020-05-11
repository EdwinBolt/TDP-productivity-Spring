package TDPproductivitySpring.projectsByUser.service;

import TDPproductivitySpring.project.model.Project;
import TDPproductivitySpring.projectsByUser.model.ProjectUser;
import TDPproductivitySpring.users.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectUserService extends CrudRepository <ProjectUser, Integer> {

    ProjectUser findByProject(Optional<Project> project);
    
}