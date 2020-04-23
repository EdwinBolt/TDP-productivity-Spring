package TDPproductivitySpring.project.model;

import javax.persistence.*;
import java.time.LocalTime;
import java.text.DateFormat;
import java.util.Date;

@Entity
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

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
        this.duration = duration;
    }
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
        DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.MEDIUM);
        this.deadline = dateFormat.format(deadline);
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
