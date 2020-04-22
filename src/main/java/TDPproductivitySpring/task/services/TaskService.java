package TDPproductivitySpring.task.services;


        import TDPproductivitySpring.task.model.*;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.stereotype.Repository;

@Repository
public interface TaskService extends CrudRepository <Task, Integer> {
}
