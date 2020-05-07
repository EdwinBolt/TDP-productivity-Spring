package TDPproductivitySpring.users.model;

import TDPproductivitySpring.project.model.Project;
import TDPproductivitySpring.projectsByUser.model.ProjectUser;
import TDPproductivitySpring.task.model.Task;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String username;
    String password;

/*    @ManyToMany(mappedBy = "worksOn")
    Set<Project> accessedBy;*/

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties({"user"})
    List<ProjectUser> projects;

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

    public List<ProjectUser> getProjects() {
        return projects;
    }

    public void setProjects(List<ProjectUser> projects) {
        this.projects = projects;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", project=" + project +
                '}';
    }
}
