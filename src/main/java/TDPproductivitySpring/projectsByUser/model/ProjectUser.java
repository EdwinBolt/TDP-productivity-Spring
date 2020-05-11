package TDPproductivitySpring.projectsByUser.model;

import TDPproductivitySpring.project.model.Project;
import TDPproductivitySpring.task.model.Task;
import TDPproductivitySpring.users.model.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="projectUser")
public class ProjectUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @ManyToOne
    @JoinColumn(name = "projectId", updatable = false)
    public Project project;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    public User user;

    public ProjectUser() {
    }

    public ProjectUser(int id, Project project, User user) {
        this.id = id;
        this.project = project;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "ProjectUser{" +
                "id=" + id +
                ", project=" + project +
                ", user=" + user +
                '}';
    }
}
