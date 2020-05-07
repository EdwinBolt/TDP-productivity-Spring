package TDPproductivitySpring.projectsByUser.model;

import TDPproductivitySpring.project.model.Project;
import TDPproductivitySpring.task.model.Task;
import TDPproductivitySpring.users.model.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="projectUser")
public class ProjectUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @ManyToOne
    @JoinColumn(name = "projectId")
    public Project project;

    @ManyToOne
    @JoinColumn(name = "userId")
    public User user;

    public ProjectUser() {
    }

    public ProjectUser(int id, Project project, User user) {
        this.id = id;
        this.project = project;
        this.user = user;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
