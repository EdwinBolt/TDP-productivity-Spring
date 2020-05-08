package TDPproductivitySpring.projectsByUser.service;

import TDPproductivitySpring.projectsByUser.model.ProjectUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectUserService extends CrudRepository <ProjectUser, Integer> {
    
}