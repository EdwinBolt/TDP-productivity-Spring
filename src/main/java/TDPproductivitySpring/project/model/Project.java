package TDPproductivitySpring.project.model;

import TDPproductivitySpring.users.model.User;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.text.DateFormat;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @ManyToMany
    @JoinTable(name = "project_accessed", joinColumns = @JoinColumn(name = "project_id"), inverseJoinColumns = @JoinColumn(name = "user_id"))
    Set<User> worksOn;

    String projectName;
    LocalTime duration;
     String deadline;
//
//    @OneToMany(mappedBy = "project")
//    //@JsonIgnoreProperties({"project"})      // deze regel of die hieronder gebruiken
//    @JsonManagedReference



    //public List<Task> tasks;
   // public Task task;

    public Project() {
    }

    public Project(int id, String name, LocalTime duration) {
        this.id = id;
        this.projectName = name;
        this.duration = duration;
    }

    public LocalTime getDuration() {
        return duration;
    }

    public void setDuration(LocalTime duration) {
        this.duration = duration;}

    public Project(int id, String name, Date deadline, LocalTime duration) {
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


    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", projectName='" + projectName + '\'' +
                ", duration=" + duration +
                ", deadline=" + deadline +
                '}';
    }
}
