package TDPproductivitySpring.project.model;

import TDPproductivitySpring.projectsByUser.model.ProjectUser;
import TDPproductivitySpring.task.model.Task;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

/*    @ManyToMany
    @JoinTable(name = "project_accessed", joinColumns = @JoinColumn(name = "project_id"), inverseJoinColumns = @JoinColumn(name = "user_id"))
    Set<User> worksOn;*/

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
    //@JsonIgnoreProperties(value = "project", allowSetters = true)
    List<Task> tasks;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties(value = "project", allowSetters = true)
    List<ProjectUser> users;

    String projectName;
    int duration;
    String deadline;

    public Project() {
    }

    public Project(int id, String name, int duration) {
        this.id = id;
        this.projectName = name;
        this.duration = duration;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;}

    public Project(int id, String name, Date deadline, int duration) {
        this.id = id;
        this.projectName = name;
        this.duration = duration;
        setDeadline(deadline);
    }

    public int getId() {return id;}

    public void setId(int id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }



    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        SimpleDateFormat SDFormat = new SimpleDateFormat("yyyy-MM-dd");
        //DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.MEDIUM);
        this.deadline = SDFormat.format(deadline);
    }

    public List<ProjectUser> getUsers() {
        return users;
    }

    public void setUsers(List<ProjectUser> users) {
        if(this.users == null ){
            this.users = users;
        } else {
            this.users.retainAll(users);
            this.users.addAll(users);
        }
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        if(this.tasks == null ){
            this.tasks = tasks;
        } else {
            this.tasks.retainAll(tasks);
            this.tasks.addAll(tasks);
        }
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", tasks=" + tasks +
                ", users=" + users +
                ", projectName='" + projectName + '\'' +
                ", duration=" + duration +
                ", deadline='" + deadline + '\'' +
                '}';
    }
}
