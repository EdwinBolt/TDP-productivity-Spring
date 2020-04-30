package TDPproductivitySpring.users.model;

import TDPproductivitySpring.project.model.Project;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @ManyToMany(mappedBy = "worksOn")
    Set<Project> accessedBy;

    int project;


    public User() {
    }

    public User(int id, int project) {
        this.id = id;
        this.project = project;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProject() {
        return project;
    }

    public void setProject(int project) {
        this.project = project;
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", project=" + project +
                '}';
    }
}
