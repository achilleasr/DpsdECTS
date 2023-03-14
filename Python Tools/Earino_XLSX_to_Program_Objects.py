import pandas

df2 = pandas.read_excel('p3.xlsx')



subjects = []
days = ["ΔΕΥΤΕΡΑ", "ΤΡΙΤΗ", "ΤΕΤΑΡΤΗ", "ΠΕΜΠΤΗ", "ΠΑΡΑΣΚΕΥΗ"]
days_en = ["Mon", "Tue", "Wed", "Thu", "Fri"]

code = {
"Αγγλικά-Ορολογία -Α": 2354,
"Αγγλικά-Ορολογία -Β": 2354,
"Αισθ.Συναισθ. Σχεδ. (Ε)": 10302,
"Αισθ.Συναισθ. Σχεδ. (Θ)": 10302,
"Ακαδ. Αγγλικά Ι": 4011,
"Ακαδ. Αγγλικά ΙΙ": 10200,
"Αλγ. Δομές Δεδομένων": 7055,
"Αλλ. Ανθρ.-Υπολ. (Ε) - Α": 6104,
"Αλλ. Ανθρ.-Υπολ. (Ε) - Β": 6104,
"Αλλ. Ανθρ.-Υπολ. (Θ)": 6104,
"Αν.& Κατ. Πρ. ΗΥ (Θ)": 8452,
"Αν.Κατ.Πρ.ΗΥ(Ε)": 8452,
"Γνωστική Επιστήμη": 8154,
"Διαδραστική Σχεδ. (Ε)": 4153,
"Διαδραστική Σχεδ. (Θ)": 4153,
"Εικονική Πραγματ. (Ε)": 9554,
"Εικονική Πραγματ. (Θ)": 9554,
"Θεωρία Πολύπλ. Οργαν.": 7258,
"Ιστ. Τέχνης Ι": 5053,
"Ιστορία Design II": 2252,
"Μαθηματικά ΙI": 3453,
"Οικοδ. Διοίκηση Μαρκών": 9905,
"Πρακτική Άσκηση": 8902,
"Ρομποτική (Ε)": 8253,
"Ρομποτική (Θ)": 8253,
"Στούντιο 2Α-A": 2306,
"Στούντιο 2Α-Β": 2306,
"Στούντιο 2Β-Α": 3500,
"Στούντιο 2Β-Β": 3500,
"Στούντιο 4": 4304,
"Στούντιο 6": 6303,
"Συστ. Υποστ. Αποφ.": 9453,
"Συστημική Θεωρία": 4053,
"Σχ.&Τεχ. Παραγωγής(Ε)": 9503,
"Σχ.&Τεχ. Παραγωγής(Θ)": 9503,
"Σχεδ. Παγκ. Ιστό(Ε)": 6404,
"Σχεδ. Παγκ. Ιστό(Θ)": 6404,
"Σχεδ. Προσθ. Κατασκ.": 10152,
"Σχεδ. Φορητές Συσκ.(Ε)": 8056,
"Σχεδ. Φορητές Συσκ.(Θ)": 8056,
"Σχεδίαση Πληροφορίας": 8802,
"Σχεδίαση για όλους": 7154,
"Σχεδίαση με ΗΥ (Ε)" : 5153,
"Σχεδίαση με ΗΥ (Ε) -Α": 5153,
"Σχεδίαση με ΗΥ (Ε) -Β": 5153,
"Σχεδίαση με ΗΥ (Ε) -Φρ.": 5153,
"Σχεδίαση με ΗΥ (Θ)": 5153,
"Τεχν. Μεθ. Προγρ. (Ε)-Α": 4203,
"Τεχν. Μεθ. Προγρ. (Ε)-Β": 4203,
"Τεχν. Μεθ. Προγρ. (Θ)": 4203,
"Τεχνικό Σχέδιο (Ε)": 4502,
"Τεχνικό Σχέδιο (Θ)": 4502,
"Υλικά (Ε)": 4356,
"Υλικά (Θ)": 4356,
"Ψηφ. Μορφές Αφήγ. (Ε)": 7554,
"Ψηφ. Μορφές Αφήγ. (Θ)": 7554,
"Ψηφ. Πολιτιστική Κληρ.": 7901    
}


class Subject:
    def __init__(self, name, hours):
        self.hours = hours
        self.semester = name[0]
        start = name.split("[")
        end = start[1].split("]")
        self.room = end[0]
        self.name = end[1]
        self.days = [[], [], [] , [], [] ]
        self.code = 0
        if(self.name in code):
            self.code = code[self.name]
    def printHours(self):
        programma = ""
        for i in range (5):
            programma += days_en[i] + ": " + str(self.days[i])
            #if(i < 4):
            programma += ","
        return programma #+ str(self.hours)
    def __str__(self):
        return "{\n"+f"Name: '{self.name}',\nSemester: {self.semester},\nRoom: '{self.room}',\nCode: {self.code},\n" + self.printHours()+ "\n},"
   



def AddHours(moreOfThatClass, existingClass, day):
    #existingClass.hours += moreOfThatClass.hours
    existingClass.days[day] += moreOfThatClass.hours

def AddSubject(s1,day,i):
    does_exist = False
    if(len(subjects) == 0):
        pass
    else:
        for subject in subjects:
            if(subject.name == s1.name):
                AddHours(s1,subject, j)
                does_exist = True
    if (not does_exist):
        s1.days[day] += [i]
        subjects.append(s1)
        


for j in range(5):
    for i in range(59):
        v = str(df2.iloc[i,j+1])
        if(v == "nan" or (v in days)):
            pass
        elif("\n" in v):
            twoClassesAtOnce = v.split("\n")
            #print(twoClassesAtOnce[0] +"  +  "+ twoClassesAtOnce[1] + "\n")
            s1 = Subject(twoClassesAtOnce[0],[i % 15 +7])
            AddSubject(s1,j,i % 15 +7)
            s1 = Subject(twoClassesAtOnce[1],[i % 15 +7])
            AddSubject(s1,j,i % 15 +7)
        else:
            s1 = Subject(v,[i % 15 +7])
            AddSubject(s1,j,i % 15 +7)

#sortedSubjects = sorted(subjects, key=lambda x: x.name, reverse=False)
#for i in range(len(sortedSubjects)):
#   input('"' + sortedSubjects[i].name + '": ')

def PrintAll():
    print("Printing All Subjects\n")
    for i in range(len(subjects)):
        print(subjects[i])
PrintAll()
