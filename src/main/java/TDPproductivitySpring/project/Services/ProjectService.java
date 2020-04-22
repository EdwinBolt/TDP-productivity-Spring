package TDPproductivitySpring.project.Services;

import TDPproductivitySpring.project.model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectService extends CrudRepository <Project, Integer> {



}
