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

    String username;
    String password;

    @ManyToMany(mappedBy = "worksOn")
    Set<Project> accessedBy;

    int project;


    public User() {
    }

    public User(int id, String username, String password, int project) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.project = project;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
