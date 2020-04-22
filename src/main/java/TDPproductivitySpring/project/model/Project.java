package TDPproductivitySpring.project.model;

import javax.persistence.*;

@Entity
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String projectName;
//
//    @OneToMany(mappedBy = "project")
//    //@JsonIgnoreProperties({"project"})      // deze regel of die hieronder gebruiken
//    @JsonManagedReference



    //public List<Task> tasks;
   // public Task task;

    public Project() {
    }

    public Project(int id, String name) {
        this.id = id;
        this.projectName = name;
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

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", name='" + projectName + '\'' +
                '}';
    }
}
