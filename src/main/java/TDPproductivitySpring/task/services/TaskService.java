package TDPproductivitySpring.task.services;


        import TDPproductivitySpring.task.model.*;
        import org.springframework.data.jpa.repository.Query;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.data.repository.query.Param;
        import org.springframework.stereotype.Repository;

        import java.util.Optional;

@Repository
public interface TaskService extends CrudRepository <Task, Integer> {

        //Iterable<Task>findByProject(String project);

/*
        @Query("select t from task t join t.project p where p.name = :name")
        Optional<Task> findByProjectId(@Param("name") String name);

 */

        /*
        @Query("select b from Book b join b.authors c where c.name = :name")
        Iterable<Book> findByAuthorName(@Param("name") String name);

         */


}
