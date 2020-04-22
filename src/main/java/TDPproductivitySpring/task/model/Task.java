package TDPproductivitySpring.task.model;


import TDPproductivitySpring.project.model.Project;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String name;
    // String description;

    @ManyToOne
//
//    @JsonBackReference
    @JoinColumn(name = "project_id")
    public Project project;

    public Task() {    }


    public Task(int id, String name) {
        this.id = id;
        this.name = name;
        //this.project = project_id;
    }
/*
    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

 */

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
        return "Task{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
