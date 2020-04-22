package TDPproductivitySpring.project.model;

import javax.persistence.*;
import java.text.DateFormat;
import java.util.Date;

@Entity
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String projectName;
     String deadline;
//
//    @OneToMany(mappedBy = "project")
//    //@JsonIgnoreProperties({"project"})      // deze regel of die hieronder gebruiken
//    @JsonManagedReference



    //public List<Task> tasks;
   // public Task task;

    public Project() {
    }

    public Project(int id, String name, Date deadline) {
        this.id = id;
        this.projectName = name;
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
                ", deadline=" + deadline +
                '}';
    }
}
