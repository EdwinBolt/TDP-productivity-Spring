package TDPproductivitySpring.project.model;

import TDPproductivitySpring.task.model.Task;
import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String name;
//
//    @OneToMany(mappedBy = "project")
//    //@JsonIgnoreProperties({"project"})      // deze regel of die hieronder gebruiken
//    @JsonManagedReference



    //public List<Task> tasks;
   // public Task task;

    public Project() {
    }

    public Project(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
